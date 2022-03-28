import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [prototypes] = useState([
    {
      id: "pp-01",
      title: "365마켓",
      artist: "Thomas Buisson",
      desc: {
        name: '장난감',
        location: '경기도 남양주시',
        uploadDate: '11:42',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10000,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-02",
      title: "365마켓",
      artist: "Ahmed Amr",
      desc: {
        name: '핸드폰',
        location: '경기도 광주시',
        uploadDate: '10:40',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20000,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-03",
      title: "365마켓",
      artist: "Dominik Kandravý",
      desc: {
        name: '노트북',
        location: '서울특별시 강남구',
        uploadDate: '08:50',
        barter: false,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/macOS_Folder_Concept_-_Folder_concept.mp4",
      price: 30000,
      pieUrl: "https://cloud.protopie.io/p/acde5ccdf9",
    },
    {
      id: "pp-04",
      title: "365마켓",
      artist: "Tony Kim",
      desc: {
        name: '노트북',
        location: '서울특별시 강남구',
        uploadDate: '08:50',
        barter: false,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Translator.mp4",
      price: 40000,
      pieUrl: "https://cloud.protopie.io/p/b91edba11d",
    },
    {
      id: "pp-05",
      title: "365마켓",
      artist: "Tony Kim",
      desc: {
        name: '모니터',
        location: '서울특별시 강남구',
        uploadDate: '08:50',
        barter: false,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/In-car_voice_control.mp4",
      price: 50000,
      pieUrl: "https://cloud.protopie.io/p/6ec7e70d1a",
    },
    {
      id: "pp-06",
      title: "365마켓",
      artist: "Richard Oldfield",
      desc: {
        name: '노트북',
        location: '서울특별시 강남구',
        uploadDate: '08:50',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/The_Adventures_of_Proto.mp4",
      price: 60000,
      pieUrl: "https://cloud.protopie.io/p/95ee13709f",
    },
    {
      id: "pp-07",
      title: "365마켓",
      artist: "Mustafa Alabdullah",
      desc: {
        name: '핸드폰',
        location: '경기도 광주시',
        uploadDate: '10:40',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/sunglasses_shop_app.mp4",
      price: 70000,
      pieUrl: "https://cloud.protopie.io/p/6f336cac8c",
    },
    {
      id: "pp-08",
      title: "365마켓",
      artist: "Fredo Tan",
      desc: {
        name: '핸드폰',
        location: '경기도 광주시',
        uploadDate: '10:40',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/minimalist-text-editor.mp4",
      price: 80000,
      pieUrl: "https://cloud.protopie.io/p/946f88f8d3",
    },
    {
      id: "pp-09",
      title: "365마켓",
      artist: "Tony Kim",
      desc: {
        name: '핸드폰',
        location: '경기도 광주시',
        uploadDate: '10:40',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/TV.mp4",
      price: 90000,
      pieUrl: "https://cloud.protopie.io/p/60ee64cda0",
    },
    {
      id: "pp-10",
      title: "365마켓",
      artist: "Arpit Agrawal",
      desc: {
        name: '핸드폰',
        location: '경기도 광주시',
        uploadDate: '10:40',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Credit_Card_App.mp4",
      price: 90000,
      pieUrl:
        "https://cloud.protopie.io/p/09ce2fdf84/21?ui=true&mockup=true&touchHint=true&scaleToFit=true&cursorType=touch",
    },
    {
      id: "pp-11",
      title: "365마켓",
      artist: "Changmo Kang",
      desc: {
        name: '핸드폰',
        location: '경기도 광주시',
        uploadDate: '10:40',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Whack_a_mole.mp4",
      price: 90000,
      pieUrl: "https://cloud.protopie.io/p/ab796f897e",
    },
    {
      id: "pp-12",
      title: "365마켓",
      artist: "Haerin Song",
      desc: {
        name: '핸드폰',
        location: '경기도 광주시',
        uploadDate: '10:40',
        barter: true,
      },
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Voice_note_with_sound_wave.mp4",
      price: 90000,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
  ]);
  const [orders, setOrders] = useState([]);

  // [{id, quantity: 1}]
  const addToOrder = useCallback((id) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);

      if (finded === undefined) {
        return [...orders, { id, quantity: 1 }];
      } else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);
  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id);
    });
  }, []);
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        prototypes,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;