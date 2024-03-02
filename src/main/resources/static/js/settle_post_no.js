document.querySelector('input[name="building"]').addEventListener('blur', () => {
    const value = myForm.reselt.value + " " + myForm.city.value + " " + myForm.building.value; 
    console.log(value);    
    fetch('https://dapi.kakao.com/v2/local/search/address.json?query=' + value, {
        headers: {
            'Authorization': 'KakaoAK 571da10b52c5455e3c0f23a0e5db614b'
        }
    }).then((response) => {
        return response.json(); // JSON 형태로 응답 받기
    }).then((data) => {
        console.log(data.documents); // 응답 데이터 출력
        myForm.building.value = data.documents[0].road_address.address_name;
        myForm.cityNum.value = data.documents[0].road_address.zone_no;
        
        console.log(data.meta); // 응답 데이터 출력
    }).catch((error) => {
        console.error('Error:', error); // 에러 발생 시 처리
    });
});