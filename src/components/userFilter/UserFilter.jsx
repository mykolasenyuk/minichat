const UserFilter = ({ value, onChange }) => {
  return (
    <label>
      <input
        placeholder="Find messages by user name"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
export default UserFilter
