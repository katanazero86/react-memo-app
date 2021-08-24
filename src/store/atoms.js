import {atom} from 'jotai'

// memo 작성 시, 사용하는 라벨
export const memoLabels = atom([
    {
        id: 'label-1',
        hex: '#21ba45',
        rgb: '33,186,69',
        name: '메모'
    },
    {
        id: 'label-2',
        hex: '#c10015',
        rgb: '93,0,21',
        name: '중요'
    },
    {
        id: 'label-3',
        hex: '#e6e6e6',
        rgb: '230,230,230',
        name: '주의'
    },
    {
        id: 'label-4',
        hex: '#7a69ff',
        rgb: '122,105,255',
        name: '프론트엔드',
    },
    {
        id: 'label-5',
        hex: '#4da5bd',
        rgb: '77,165,189',
        name: '백엔드',
    },
]);

// memo 목록 상태값
export const memoList = atom([]);
