const Tag = (props) => {
    const { tags } = props

    return tags && (
        <div className="prose flex justify-items-start mt-10">
            {tags.map((tag, i) => (
                <div key={tag} className="tag">{tag}</div>
            ))}
        </div>
    )
}

export default Tag