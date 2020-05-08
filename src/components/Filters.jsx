import React from "react";

function Filters(props) {
  const { filterText, setfilterText } = props;
  const { orderContacts } = props;
  return (
    <div className="container">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            value={filterText}
            onChange={(e) => setfilterText(e.target.value)}
          />

          <button className="filters__search__icon" onClick={() => {}}>
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          className="filters__item is-selected"
          onClick={() => orderContacts("name")}
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          className="filters__item"
          onClick={() => orderContacts("country")}
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          className="filters__item"
          onClick={() => orderContacts("company")}
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          className="filters__item"
          onClick={() => orderContacts("department")}
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          className="filters__item"
          onClick={() => orderContacts("admissionDate")}
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
}

export default Filters;
