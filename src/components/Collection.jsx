import Card from "./Card";
import './Collection.css';

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
        <div className="Collection">
            {dummyData.map((p) => {
                return <Card title={p.title}/>
            })}
            {/* <Card /> */}
        </div>
    )
}

export default Collection