const getallweather = async (req, res) => {
    try
    {
         // OpenWetherMap呼び出し
        await fetch("http://api.openweathermap.org/data/2.5/forecast?q=kawasaki&lang=Ja&APPID=86092c68620468ae0657fea83ed51789&units=metric")
        .then(response => response.json())
        .then((data) => {
            
            // 現在のデータ作成
            now = {
                "date":data.list[0].dt_txt, 
                "temp":data.list[0].main.temp, 
                "weather":data.list[0].weather[0].main,
                "pressure":data.list[0].main.pressure
            }

            return res.status(200).json(now);
        });

    }catch(err)
    {
        return res.status(500).json(err)
    }
}

const getfashion = async (req, res) => {
    try
    {
         // OpenWetherMap呼び出し
        await fetch("http://api.openweathermap.org/data/2.5/forecast?q=kawasaki&lang=Ja&APPID=86092c68620468ae0657fea83ed51789&units=metric")
        .then(response => response.json())
        .then((data) => {
            
            temp = data.list[0].main.temp;

            // 気温から服装を割り出し
            fashion = fashioncheck(temp)

            fashioninfo = {
                "temp":temp,
                "fashion":fashion
            }

            return res.status(200).json(fashioninfo);
        });

    }catch(err)
    {
        return res.status(500).json(err)
    }
}

function fashioncheck(temp){

    if(temp >= 30)
    {
        return "半袖シャツ";
    }
    else if(temp >= 25)
    {
        return "半袖・七分袖シャツ";
    }
    else if(temp >= 20)
    {
        return "長袖・七分袖シャツ";
    }
    else if(temp >= 15)
    {
        return "カーディガン・長袖シャツ・スウェット";
    }
    else if(temp >= 12)
    {
        return "セーター";
    }
    else if(temp >= 8)
    {
        return "トレンチコート";
    }
    else if(temp >= 5)
    {
        return "冬物コート";
    }
    else
    {
        return "ダウンコート";
    }
}

module.exports = { 
    getallweather,
    getfashion
}