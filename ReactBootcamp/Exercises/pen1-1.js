function Badge () {
    return (
      <div>
        <img src={''} />
        <h1>Name: </h1>
        <h3>username: </h3>
      </div>
    )
  }
  
  ReactDOM.render(
    <Badge 
      name='Tyler McGinnis'
      username='tylermcginnis'
      img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
    />,
    document.getElementById('app')
  );