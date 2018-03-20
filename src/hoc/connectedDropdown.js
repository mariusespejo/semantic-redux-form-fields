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
      if (multiple && defaultSelectedLabel) {
        const defaultOption = options.find(
          o => o.text === defaultSelectedLabel
        );
        if (value.length === 0) {
          this.props.onChange({}, { value: [defaultOption.value], options });
          return [defaultOption.value];
        } else if (value && !value.includes(defaultOption.value)) {
          return [...value, defaultOption.value];
        }
      } else if (!multiple && options.length === 1 && !value && options[0]) {
        this.props.onChange({}, { value: options[0].value, options });
        return options[0].value;
      }

      return value;
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

      if (options.length > 0) {
        storedValue = this.findValueInOptions(options);
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
