const home_style = {
    poster: {
        width: "90%"
    },

    container: {
        width: "90%",
        marginRight: "auto",
        marginLeft: "auto",

        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        gridGap: "1%"
    },

    addToListBtn: {
        border: "none",
        borderRadius: "4px",
        backgroundColor: "green"
    },

    cards: {
        border: "1px solid black",
        borderRadius: "5px",
    },

    header_cards: {
        display: "flex",
        gap: "1%"
    }
}

export default home_style;