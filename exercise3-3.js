const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

const getPhotos = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('gagal mendapatkan foto', error);
    }
}

const getPhotoById = async (photoId) => {
    try {
        const response = await fetch(`${apiUrl}/${photoId}`);
        if (response.status === 200) {
            const data = await response.json();
            console.log('Berhasil mengambil foto dengan ID', photoId, ':', data);
        } else {
            console.log('Foto tidak ditemukan');
        }
    } catch (error) {
        console.log('Gagal mendapatkan foto', error);
    }
}

const postPhoto = async(newPhoto) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPhoto)
        })
        if (response.status === 201){
            const data = await response.json();
            console.log('Berhasil menambahkan foto', data)
        } else {
            console.log('Gagal menambahkan foto')
        }
    } catch (error) {
        console.log('Terjadi kesalahan', error)
    }
}

const newData = {
    title: 'Foto Baru',
    url: 'https://fotobaru.com/300',
    thumbnailUrl: 'https://fotobarubanget.com/300'
}

const updatePhoto = async (photoId, updatedPhoto) => {
    try {
        const response = await fetch(`${apiUrl}/${photoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPhoto)
        })
        if (response.status === 200){
            const data = await response.json();
            console.log(`Berhasil mengubah foto pada id ${photoId}`, data)
        } else {
            console.log('Gagal mengubah foto')
        }
    } catch (error) {
        console.log('Terjadi kesalahan', error)
    }
}

const updatedPhoto = {
    title: 'Foto update',
    url: 'https://fotoudahdiupdate.com',
    thumbnailUrl: 'https://fototerupdate.com/2991'
}

const deletePhoto = async (photoId) => {
    try {
        const response = await fetch(`${apiUrl}/${photoId}`, {
            method: 'DELETE'
        })
        if (response.status === 200){
            const data = await response.json();
            console.log(`Berhasil menghapus foto pada id ${photoId}`, data)
        } else {
            console.log('Gagal menghapus foto')
        }
    } catch (error) {
        console.log('Terjadi kesalahan', error)
    }
}

// getPhotos();
// getPhotoById(10);
// postPhoto(newData);
// updatePhoto(10, updatedPhoto);
deletePhoto(90);
