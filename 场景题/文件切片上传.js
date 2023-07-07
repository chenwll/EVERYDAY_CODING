async submit() {
    let size = 2*1024*1024
    let current = 0;
    let fileSize = size;
    let formData = new formData();
    formData.append(fileObject.name,fileObject)
    while(current < fileSize) {
        await axios.post("http://localhost:4000/upload",fileObject.slice(current,current+size))
    }
}

// 文件拼接，检测文件名,同一个文件的切片,都叫同一个名字