const invento = [];

const desc = `jkwhfksdflksdfhkjfdhlkshdf
dfjkhkjshfjklsdfhsjkdf
sdkjfskdjflkjsdkfjsd
skjdhfkjsdjkfsdksdfkjsdfkhsdkjfhkjsd
sdlkfjsdljfkljsdlkfjlsdkjlfkqsd
ljhsdkfskdfqf`;

const Product = {
	name: "abc",
	desc: desc,
	quantity: 100,
	price: 1000
};

for (let i = 0; i < 10; i++)
{
	invento.push(Product);
}

// for (let i = 0; i < invento.length; i++)
// {
// 	console.log(invento[i]);
// }

const structDatas = [
    { handler: 'http', endpoint: desc, method: 'ALL' },
    { handler: 'event', endpoint: 'http://localhost:3000/event', method: 'POST' },
    { handler: 'GCS', endpoint: 'http://localhost:3000/GCS', method: 'POST' }
];
console.table(structDatas);
