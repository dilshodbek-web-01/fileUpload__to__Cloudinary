
const uploadPostFile = async (e) => {
    alert(1)
    const files = e.target.files;

    console.log(files);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "my_first-img");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dpbx1lms5/image/upload",
      {
        method: "POST",
        body: data
      }
    )
    const data2 = await res.json();
    

    console.log(data2.secure_url);
    console.log(data2);
  }

fileUpload.addEventListener('change', uploadPostFile)

