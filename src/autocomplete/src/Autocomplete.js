import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import fuzzaldrin from 'fuzzaldrin-plus'
import Downshift from 'downshift'
import VirtualList from 'react-tiny-virtual-list'
import { Popover } from '../../popover'
import { Text } from '../../typography'
import { Pane } from '../../layers'
import AutocompleteItem from './AutocompleteItem'

const fuzzyFilter = (items, input) => fuzzaldrin.filter(items, input)

const autocompleteItemRenderer = props => <AutocompleteItem {...props} />

// https://github.com/paypal/downshift/issues/164
export default class Autocomplete extends PureComponent {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.any,
    defaultSelectedItem: PropTypes.any,
    itemToString: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    itemSize: PropTypes.number,
    renderItem: PropTypes.func,
    itemsFilter: PropTypes.func,
    isFilterDisabled: PropTypes.bool,
    popoverMinWidth: PropTypes.number,
    popoverMaxHeight: PropTypes.number,
    useSmartPositioning: PropTypes.bool,
    ...Downshift.propTypes
  }

  static defaultProps = {
    itemToString: i => (i ? String(i) : ''),
    itemSize: 32,
    itemsFilter: fuzzyFilter,
    isFilterDisabled: false,
    popoverMinWidth: 200,
    popoverMaxHeight: 240,
    useSmartPositioning: false,
    renderItem: autocompleteItemRenderer
  }

  renderResults = ({
    width,
    inputValue,
    highlightedIndex,
    selectItemAtIndex,
    selectedItem,
    getItemProps
  }) => {
    const {
      title,
      itemSize,
      itemsFilter,
      items: originalItems,
      itemToString,
      renderItem,
      popoverMaxHeight,
      isFilterDisabled
    } = this.props

    const items =
      isFilterDisabled || inputValue.trim() === ''
        ? originalItems
        : itemsFilter(originalItems, inputValue)

    if (items.length === 0) return null

    return (
      <Pane width={width}>
        {title && (
          <Pane padding={8} borderBottom="extraMuted">
            <Text size={200} color="muted" isUppercase>
              {title}
            </Text>
          </Pane>
        )}
        {items.length > 0 && (
          <VirtualList
            width="100%"
            height={Math.min(items.length * itemSize, popoverMaxHeight)}
            itemSize={itemSize}
            itemCount={items.length}
            scrollToIndex={highlightedIndex || 0}
            overscanCount={3}
            scrollToAlignment="auto"
            renderItem={({ index, style }) => {
              const item = items[index]
              const itemString = itemToString(item)
              return renderItem(
                getItemProps({
                  item,
                  key: itemString,
                  index,
                  style,
                  children: itemString,
                  onMouseUp: () => {
                    selectItemAtIndex(index)
                  },
                  isSelected: selectedItem === item,
                  isHighlighted: highlightedIndex === index
                })
              )
            }}
          />
        )}
      </Pane>
    )
  }

  render() {
    const {
      children,
      itemSize,
      renderItem,
      itemsFilter,
      popoverMaxHeight,
      useSmartPositioning,
      popoverMinWidth,
      ...props
    } = this.props

    return (
      <Downshift {...props}>
        {({
          isOpen,
          inputValue,
          getItemProps,
          selectedItem,
          highlightedIndex,
          selectItemAtIndex,
          ...restDownshiftProps
        }) => (
          <div>
            <Popover
              isOpen={isOpen}
              minWidth={popoverMinWidth}
              content={({ targetRect }) =>
                this.renderResults({
                  width: Math.max(targetRect.width, popoverMinWidth),
                  inputValue,
                  getItemProps,
                  selectedItem,
                  highlightedIndex,
                  selectItemAtIndex
                })
              }
              minHeight={0}
              animationDuration={0}
              useSmartPositioning={useSmartPositioning}
            >
              {({ isOpen: isOpenPopover, toggle, getRef, key }) =>
                children({
                  key,
                  isOpen: isOpenPopover,
                  toggle,
                  getRef,
                  inputValue,
                  selectedItem,
                  highlightedIndex,
                  selectItemAtIndex,
                  ...restDownshiftProps
                })
              }
            </Popover>
          </div>
        )}
      </Downshift>
    )
  }
}
