import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;

    if (search.trim() === '') {
      toast.error(`Enter text for finding images`);
      return;
    }

    onSearch(search.trim());
    form.reset();
  };

  return (
    <header >
      <form  onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;
