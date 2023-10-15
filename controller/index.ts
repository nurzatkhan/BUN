export async function defaltRoute(req: Request) {
    const formdata = await req.formData();
    const file = formdata.get('profilePicture');

    if (!file) throw new Error('Must upload a profile picture.');

    const formData = new FormData()
    formData.append('name', "nurzatkhan");
    formData.append('gender', "boy");
    formData.append('age', "23");
    formData.append('file', file)

    await fetch("http://localhost:8005/upload/", {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: formData,
    }).then((res) => res.json())

    return new Response("Success");
}


//
//function postBook() {
//    const obj = {
//        "texts": [
//            "Жил-был красный лис Шажок в волшебном лесу. Он носил яркую шапку с детства, потому что на макушке у него не росли волосы. Шапка сделала его узнаваемым среди других лисиц, но и оставляла его безразличным к себе.",
//            "Однажды, прогуливаясь по лесу, Шажок встретил маленького мальчика по имени ИМЯ. Мальчик был веселым и добрым, и они стали лучшими друзьями. Вместе они исследовали лес, играли в прятки и устраивали пикники.",
//            "Однажды, когда они гуляли, они услышали просьбу о помощи. Волшебная фея была запутана в сети паука и не могла вырваться. Шажок и ИМЯ решили помочь и освободили фею. Она благодарно подарила им три желания. Но Шажок сказал, что у него все есть - прекрасный друг ИМЯ.",
//            "Оказалось, что настоящее сокровище - это дружба. Фея, восхищенная такой мудростью, удалилась, оставив друзей счастливыми и удивленными. Они поняли, что настоящие сокровища всегда внутри нас - в наших сердцах."
//        ],
//        "name_of_book": "Name's World"
//    }
//    const form = new FormData();
//    form.append('name', "nurzatkhan");
//    form.append('gender', "boy");
//    form.append('age', "23");
//    form.append('age', "23");
//    form.append('image_file', files[0].buffer, {filename: files[0].originalname});
//    const str = JSON.stringify(obj);
//    
//    const jsonBuufer = Buffer.from(str)
//    form.append('json_file', jsonBuufer, {filename: "sample.json"})
//
//    axios.post('http://localhost:8005/upload/', form)
//    
//        .then(function (response) {
//            console.log(response.data)
//        })
//        .catch(function (error) {
//            console.log(error)
//        })
//}