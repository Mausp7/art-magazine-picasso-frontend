import Card from "./Card";
import './Card.css';

const dummyData = [
    {
        title: 'Painting One'
    },
    {
        title: 'Painting Two'
    },
    {
        title: 'Painting Three'
    },
    {
        title: 'Painting Four'
    },
    {
        title: 'Painting Five'
    },
]

const Collection = () => {
    return (
        <div>
            {dummyData.map((p) => {
                return <Card title={p.title}/>
            })}
            {/* <Card /> */}
        </div>
    )
}

export default Collection