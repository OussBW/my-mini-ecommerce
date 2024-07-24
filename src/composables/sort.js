import { ref } from "vue";

export const useSort = () => {
  //sorting
  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
    { label: "Rating High to Low", value: "!rating.rate" },
    { label: "Rating Low to High", value: "rating.rate" },
    { label: "Category", value: "category" },
  ];

  const sortKey = ref();
  const sortOrder = ref();
  const sortField = ref();

  const onSortChange = ({ value }) => {
    // the value variable represents an option of the sortOpions array
    const { value: optionValue } = value;
    const isReverse = optionValue.indexOf("!") === 0;
    sortOrder.value = isReverse ? -1 : 1;
    sortField.value = isReverse ? optionValue.slice(1) : optionValue;
    sortKey.value = value;
  };

  return { sortOptions, sortKey, sortOrder, sortField, onSortChange };
};
