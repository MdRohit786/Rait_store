import React from 'react'

const CreatePage = () => {
  return (
    <div>
      <h1>Create a New Item</h1>
      <form>
        <input type="text" placeholder="Item Name" />
        <input type="text" placeholder="Item Description" />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreatePage
