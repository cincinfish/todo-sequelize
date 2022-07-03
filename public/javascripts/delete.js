function ConfirmDelete() {
  if (confirm("lease confirm to delete this todo?")) {
    return true
  }
  return false
}