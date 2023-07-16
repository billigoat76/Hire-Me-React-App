import Card from './Card'
function Tours({people, removePerson}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Hire Us!! </h2>
                
            </div>
            <div className='cards'>
                {
                    people.map( (person) => {
                        return <Card key={person.id} {...person} removePerson={removePerson}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;