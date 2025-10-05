import React from "react"

class UserClass extends React.Component{

    constructor(props) {
        super(props)
    }

    // async componentDidMount() {

    //     const data = await fetch('https://github.com/nandagurram16');
    //     const json = await data.json()

    //     console.log(json)
    // }

    render (){

        const {name,location} = this.props

        return(
            <div className="user-card">
                <h1>Name: {name} </h1>
                <h3>Location: {location}</h3>
                <h3>Contact: nandaygj@gmail</h3>
            </div>
        )
    }
}

export default UserClass