import { ref } from "vue";

export const useSort = () => {
  //sorting
  const sortOptions = ref([
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
    { label: "Rating High to Low", value: "!rating.rate" },
    { label: "Rating Low to High", value: "rating.rate" },
    { label: "Category", value: "category" },
  ]);
  const sortKey = ref();
  const sortOrder = ref();
  const sortField = ref();

  const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.indexOf("!") === 0) {
      sortOrder.value = -1;
      sortField.value = value.substring(1, value.length);
      sortKey.value = sortValue;
    } else {
      sortOrder.value = 1;
      sortField.value = value;
      sortKey.value = sortValue;
    }
  };

  return { sortOptions, sortKey, sortOrder, sortField, onSortChange };
};
