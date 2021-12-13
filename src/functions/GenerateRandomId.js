function handleGenerateId() {
  var id = Math.random().toString(36).slice(2, 16);
  console.log(id);
  return id;
}

export default handleGenerateId;
