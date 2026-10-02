export function BookAddForm() {
  return (
    <section className="new-book">
      <form className="book-form">
        <h2>Добавить книгу</h2>
        <div>
          <label htmlFor="name">Название</label>
          <input className="book-form__field" id="name"></input>
        </div>
        <div>
          <label htmlFor="author">Автор</label>
          <input className="book-form__field" id="author"></input>
        </div>
        <select className="book-form__select">
          <option value="want">Хочу прочитать</option>
          <option value="reading">Читаю сейчас</option>
          <option value="done">Прочитано</option>
        </select>
        <button className="book-form__btn" type="submit">
          Добавить книгу
        </button>
      </form>
    </section>
  );
}
