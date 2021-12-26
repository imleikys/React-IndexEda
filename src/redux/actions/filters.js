
export const setFilterType = (filterType, filter) => ({
  type: "SET_FILTER_TYPE",
  filterType: filterType,
  filter: filter,
})

export const setNameFilter = (name) => ({
  type: "SET_NAME_FILTER",
  payload: name,
})

export const clearFilters = () => ({
  type: "CLEAR_FILTERS",
})
