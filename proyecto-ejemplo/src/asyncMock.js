const tasks = [
    { id: '1', text: 'Hacer la tarea 1', completed: false},
    { id: '2', text: 'Hacer la tarea 2', completed: false},
    { id: '3', text: 'Hacer la tarea 3', completed: false}
]
    const items = 
    [
        {
            id: 1,
            titulo: "remera",
            descripcion: "remera blanca lisa",
            imagen: "" ,
            precio:10 ,
        },
        {
            id: 2,
            titulo: "remera",
            descripcion: "remera blanca lisa",
            imagen: "" ,
            precio:10 ,
        },
        {
            id: 3,
            titulo: "remera",
            descripcion: "remera blanca lisa",
            imagen: "" ,
            precio:10 ,
        },
        {
            id: 4,
            titulo: "remera",
            descripcion: "remera blanca lisa",
            imagen: "" ,
            precio:10 ,
        }
    ]

    export const getItems = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{ 
                resolve(items)
            } , 2000 )
        }) 
    }

    export const getItem = (itemId) => {
        return new Promise((resolve,reject) => {
            setTimeout( () => {
                const newItem = items.filter(item => item.id === itemId)
                if(newItem) {
                    resolve(newItem)
                } else {
                    reject("NO SE ENCONTRO ningun item con ese ID ")
                }
            } , 2000)
        })
    }


// export const getTasks = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve(tasks)
//         }, 1000)
//     })
// }