import withToggler from "../HOCs/withToggler"

const Album = ({title, url, toggled, changeToggle}) => {
    return (
        <div>
            <hr/>
            <h4>
                <span>Album: {title}</span>
                <p>{url}</p>
                <button>  </button>
            </h4>
        </div>
    )
}

export default withToggler(Album)

// {/* <source src={KoloPlay}></source>

// <source src={Video} type = "video/mp4"></source> */}

// {toggled ? "src=https://www.flaticon.com/free-icons/heart" }