const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const { BUCKET } = process.env;

const s3Client = new S3Client();

module.exports.handler = async (event) => {
  const params = [
    {
      Key: "public/menu_icons/ADMINISTRADOR.svg",
      Bucket: BUCKET,
    },
    {
      Key: "public/menu_icons/CHECKOUT.svg",
      Bucket: BUCKET,
    },
    {
      Key: "public/menu_icons/CUENTA.svg",
      Bucket: BUCKET,
    },
  ];

  const data = await Promise.all(
    params.map(async (param) => await getImageURL(param))
  );

  console.log(data);

  return data;
};

async function getImageURL(params) {
  const command = new GetObjectCommand(params);
  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

  return url;
}
