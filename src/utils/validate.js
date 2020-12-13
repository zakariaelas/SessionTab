export function validate(initialValues, groups) {
  return (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    else if (
      initialValues.name !== values.name &&
      groups.findIndex(
        (g) => g.name.toLowerCase() === values.name.toLowerCase(),
      ) !== -1
    )
      errors.name = 'Group already exists';
    else if (values.tabs.length <= 0) {
      errors.tabs = 'You must select at least one tab';
    }
    return errors;
  };
}
