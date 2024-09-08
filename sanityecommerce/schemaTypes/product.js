export default {
    name : "product",
    title: "P",
    type: "document",
    fields:[
        {
            name : "image",
            title : "Image",
            type : 'array',
            of :[{type : 'image'}],
            options:{
                hotspot :'true'
            }
        }
    ]
}