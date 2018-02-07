import React from 'react';
import { connect } from 'react-redux';
import { Popup } from 'semantic-ui-react';

function connectedDropdown(DropdownComponent) {
  class BaseDropdown extends React.Component {
    selectOptionsFromState = () => {
      const { state, mapStateToOptions, optionsSelector } = this.props;
      let options = [];
      if (optionsSelector) {
        options = optionsSelector(state);
      } else if (mapStateToOptions) {
        const valuesToMap = mapStateToOptions(state);
        if (valuesToMap) {
          options = valuesToMap.map(item => ({
            key: item,
            text: item,
            value: item
          }));
        }
      } else {
        options = [];
      }

      return options;
    };

    findValueInOptions = options => {
      const { value, multiple, defaultSelectedLabel } = this.props;
      if (multiple) {
        let selection = options.filter(
          o => value.includes(o.text) || defaultSelectedLabel === o.text
        );
        return selection.map(s => s.value);
      } else {
        const found = options.find(o => o.value === value);
        return found ? found.value : undefined;
      }
    };

    getDefaultValue = options => {
      const { value, defaultSelectedLabel, multiple } = this.props;

      if (multiple && defaultSelectedLabel && value.length === 0) {
        if (options.map(o => o.value).includes(defaultSelectedLabel)) {
          return [defaultSelectedLabel];
        }
      } else if (!multiple && options.length === 1 && !value && options[0]) {
        return options[0].value;
      }

      return undefined;
    };

    render() {
      const {
        dispatch,
        multiple,
        defaultSelectedLabel,
        mapStateToOptions,
        optionsSelector,
        state,
        ...passedProps
      } = this.props;

      let options = this.selectOptionsFromState();

      let storedValue = multiple ? [] : '';
      if (options.length > 0 && this.props.value) {
        storedValue = this.findValueInOptions(options);
      }

      const defaultValue = this.getDefaultValue(options);
      if (defaultValue) {
        this.props.onChange({}, { value: defaultValue, options });
      }

      if (options.length === 1) {
        return (
          <Popup
            position="top right"
            on="click"
            trigger={
              <DropdownComponent
                {...passedProps}
                options={options}
                value={storedValue}
                multiple={multiple}
                selectOnBlur={true}
              />
            }
            content="There are no additional values at this time"
          />
        );
      }

      return (
        <DropdownComponent
          {...passedProps}
          options={options}
          value={storedValue}
          multiple={multiple}
        />
      );
    }
  }

  const mapStateToProps = state => ({
    state: state
  });

  return connect(mapStateToProps)(BaseDropdown);
}

export default connectedDropdown;
