import React from 'react'

class Home extends React.Component{
    

    render(){
        return(
            <div>
                Hola Mundo
            </div>)
    }
}

Home.schema = {
    title: 'editor.home.title',
    description: 'editor.home.description',
    type: 'object',
    properties: {
      helloWorld: {
        type: 'string',
        title: 'editor.home.logo.title',
        widget: {
          'ui:widget': 'image-uploader',
        },
      },
    },
  }

export default Home
