const style = {
    fontSize: '40px',
    paddingBottom: '20px',
    textDecoration: 'underline'
}

const Title = (props) => {
    return (
        <p style={style}>{props.text}</p>
    )
}

export default Title;