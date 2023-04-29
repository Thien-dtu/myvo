function UserList({ value, index, HandlerEdit, HandlerDel }) {
  return (
    <tr key={index}>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.address}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary me-1"
          onClick={HandlerEdit}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button type="button" className="btn btn-danger" onClick={HandlerDel}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );
}
export default UserList;
