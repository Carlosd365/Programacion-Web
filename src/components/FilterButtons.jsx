function FilterButtons({ currentFilter, onChangeFilter }) {
    return (
        <div>
        <button
            onClick={() => onChangeFilter('all')}
            disabled={currentFilter === 'all'}
        >
            Todas
        </button>
        <button
            onClick={() => onChangeFilter('pending')}
            disabled={currentFilter === 'pending'}
        >
            Pendientes
        </button>
        <button
            onClick={() => onChangeFilter('completed')}
            disabled={currentFilter === 'completed'}
        >
            Completadas
        </button>
        </div>
    );
}

export default FilterButtons;
