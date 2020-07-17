import React from 'react'

// todo: correct type for this component
function InfiniteScroll<T>({
  data,
  renderItem,
  keyExtractor,
  renderEmptyList,
}) {
  return (
    <div>
      {!data.length && renderEmptyList()}
      {data.map((item, index, array) => (
        <div key={keyExtractor(item, index)}>
          {renderItem({ item, index, array })}
        </div>
      ))}
    </div>
  )
}