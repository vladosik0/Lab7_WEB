const images = [
    {
        preview: 'https://media.istockphoto.com/id/529209153/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D1%81-%D0%B2%D0%B8%D0%B4%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D1%80%D0%B0%D0%B7.jpg?s=1024x1024&w=is&k=20&c=jL9-gvMj2xcZziTxeTi0CPUekSTyT5X4iETjNby1OvE=',
        original: 'https://media.istockphoto.com/id/529209153/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D1%81-%D0%B2%D0%B8%D0%B4%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D1%80%D0%B0%D0%B7.jpg?s=1024x1024&w=is&k=20&c=jL9-gvMj2xcZziTxeTi0CPUekSTyT5X4iETjNby1OvE=',
        description: 'Prairie',
    },
    {
        preview: 'https://media.istockphoto.com/id/1317323736/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D0%BD%D0%B5%D0%B1%D0%BE-%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2.jpg?s=1024x1024&w=is&k=20&c=rZW_73RK633KFChiUhBMrTDPkQGTxcM3d6p24HjL0Y8=',
        original: 'https://media.istockphoto.com/id/1317323736/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D0%BD%D0%B5%D0%B1%D0%BE-%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2.jpg?s=1024x1024&w=is&k=20&c=rZW_73RK633KFChiUhBMrTDPkQGTxcM3d6p24HjL0Y8=',
        description: 'Forest',
    },
    {
        preview: 'https://media.istockphoto.com/id/1337232523/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B8%D0%B4-%D0%BF%D0%BE%D0%B4-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D0%BC-%D1%83%D0%B3%D0%BB%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%BE%D0%B7%D0%B5%D1%80%D0%BE-%D0%B8-%D0%BB%D0%B5%D1%81.jpg?s=1024x1024&w=is&k=20&c=Ix-zWFDsgHUqjqwbUKEEM4Ma3GpWexk_2-AK-VaYlSQ=',
        original: 'https://media.istockphoto.com/id/1337232523/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B8%D0%B4-%D0%BF%D0%BE%D0%B4-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D0%BC-%D1%83%D0%B3%D0%BB%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%BE%D0%B7%D0%B5%D1%80%D0%BE-%D0%B8-%D0%BB%D0%B5%D1%81.jpg?s=1024x1024&w=is&k=20&c=Ix-zWFDsgHUqjqwbUKEEM4Ma3GpWexk_2-AK-VaYlSQ=',
        description: 'Lake and forest',
    },
    {
        preview: 'https://media.istockphoto.com/id/1300107681/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B0%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B0.jpg?s=1024x1024&w=is&k=20&c=G3bJEscVW8I-3cTMNq-h7ZFuSUAyNEda0vemT3zcsOA=',
        original: 'https://media.istockphoto.com/id/1300107681/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B0%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B0.jpg?s=1024x1024&w=is&k=20&c=G3bJEscVW8I-3cTMNq-h7ZFuSUAyNEda0vemT3zcsOA=',
        description: 'Ocean',
    },
    {
        preview: 'https://media.istockphoto.com/id/1408518230/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5-%D0%BC%D0%BE%D1%80%D0%B5-%D0%B3%D0%BB%D1%83%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F-%D0%B1%D0%B5%D0%B7%D0%B4%D0%BD%D0%B0-%D1%81-%D1%81%D0%B8%D0%BD%D0%B8%D0%BC-%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%BC-%D1%81%D0%B2%D0%B5%D1%82%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=1bZVRfkn7UXQMCInrbdT3ATR3dIOX9GJNQuVTiBp0KY=',
        original: 'https://media.istockphoto.com/id/1408518230/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5-%D0%BC%D0%BE%D1%80%D0%B5-%D0%B3%D0%BB%D1%83%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F-%D0%B1%D0%B5%D0%B7%D0%B4%D0%BD%D0%B0-%D1%81-%D1%81%D0%B8%D0%BD%D0%B8%D0%BC-%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%BC-%D1%81%D0%B2%D0%B5%D1%82%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=1bZVRfkn7UXQMCInrbdT3ATR3dIOX9GJNQuVTiBp0KY=',
        description: 'Sea Bottom',
    },
    {
        preview: 'https://media.istockphoto.com/id/482377760/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%B1%D0%BB%D0%B0%D1%87%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B8.jpg?s=1024x1024&w=is&k=20&c=Kf3BvYsoxhlm0_6rCqYNQ81fi5tO3FGPN7DIVUE_AJY=',
        original: 'https://media.istockphoto.com/id/482377760/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%B1%D0%BB%D0%B0%D1%87%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B8.jpg?s=1024x1024&w=is&k=20&c=Kf3BvYsoxhlm0_6rCqYNQ81fi5tO3FGPN7DIVUE_AJY=',
        description: 'Desert',
    },
    {
        preview: 'https://media.istockphoto.com/id/177145956/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D1%84%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B9-%D1%81%D0%B0%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B-%D0%B2-%D0%BA%D0%B5%D0%BD%D0%B8%D0%B8.jpg?s=1024x1024&w=is&k=20&c=OWI7HKG8rUV67tXZmRLgAkldZ4fc4QBnEb-F5mG1MF4=',
        original: 'https://media.istockphoto.com/id/177145956/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D1%84%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B9-%D1%81%D0%B0%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B-%D0%B2-%D0%BA%D0%B5%D0%BD%D0%B8%D0%B8.jpg?s=1024x1024&w=is&k=20&c=OWI7HKG8rUV67tXZmRLgAkldZ4fc4QBnEb-F5mG1MF4=',
        description: 'Savannah',
    },
    {
        preview: 'https://media.istockphoto.com/id/1069539210/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BE%D1%81%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BE%D0%B7%D0%B5%D1%80%D0%B0-%D1%85%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B7%D0%B8.jpg?s=1024x1024&w=is&k=20&c=pyqqyLd2_ARoX4Ut8NVUic8Y3uGhfGya9y0iZYfXeCY=',
        original: 'https://media.istockphoto.com/id/1069539210/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BE%D1%81%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BE%D0%B7%D0%B5%D1%80%D0%B0-%D1%85%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B7%D0%B8.jpg?s=1024x1024&w=is&k=20&c=pyqqyLd2_ARoX4Ut8NVUic8Y3uGhfGya9y0iZYfXeCY=',
        description: 'Mountains',
    },
    {
        preview: 'https://media.istockphoto.com/id/536507269/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-%D0%BD%D0%B5%D0%B1%D0%BE-%D1%8F%D1%80%D0%BA%D0%B8%D0%B5-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D1%8B-%D0%B8-%D1%82%D1%83%D0%BC%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C.jpg?s=1024x1024&w=is&k=20&c=BQ0m4DFnDFBX-e7ZJbzRt_TW2WEUZf-BPLgfPi_eYVA=',
        original: 'https://media.istockphoto.com/id/536507269/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-%D0%BD%D0%B5%D0%B1%D0%BE-%D1%8F%D1%80%D0%BA%D0%B8%D0%B5-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D1%8B-%D0%B8-%D1%82%D1%83%D0%BC%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C.jpg?s=1024x1024&w=is&k=20&c=BQ0m4DFnDFBX-e7ZJbzRt_TW2WEUZf-BPLgfPi_eYVA=',
        description: 'Night Sky',
    }
];

const galleryContainer = document.querySelector('.gallery');
images.forEach(({ preview, original, description }) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = original;
    link.dataset.source = original;
    
    const img = document.createElement('img');
    img.src = preview;
    img.alt = description;

    link.appendChild(img);
    listItem.appendChild(link);
    galleryContainer.appendChild(listItem);
});
// Функція для відкриття модального вікна
function openModal(event) {
    event.preventDefault();
    const { target } = event;

    if (target.nodeName !== 'IMG') return;

    const largeImageURL = target.closest('a').dataset.source;
    console.log(largeImageURL); // Виводить у консоль посилання на велике зображення

    const instance = basicLightbox.create(`
        <img src="${largeImageURL}" width="800" height="600">
    `);
    instance.show();
}
// Додаємо обробник подій для делегування
galleryContainer.addEventListener('click', openModal);