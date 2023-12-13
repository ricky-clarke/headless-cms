const FormatDate = (publish_date ) => {

    const date = new Date(publish_date)
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return formattedDate;

}

export default FormatDate;