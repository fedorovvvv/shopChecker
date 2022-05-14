# shopChecker by NikitaFedorov
## API

#### Схема товара Item
```code
{
  site: string,
  name: string,
  url: string,
  inStock: boolean,
  price: number
}
```

#### Получить все товары Array<Item>

```
  GET /api/check
```

#### Поиск по товарам Array<Item>

```
  GET /api/check/find?
```
_поиски не чувствительны к регистру и пробелам_
| Query   	| Type    	| Описание               	| Примеры                                              	|
|---------	|---------	|------------------------	|------------------------------------------------------	|
| site    	| string  	| Поиск по сайтам.       	| 'viD' = m***vid***eo.com           |
| name    	| string  	| Поиск по наименованию. 	| 'stATion5' = Play***Station 5***|
| inStock 	| boolean 	| Проверка наличия       	| *true* = В наличии|
| price   	| string  	| цена **"от:до"**        | (от и до) = 2000:8000<br>(от) = 2000<br>(до) = :8000 	|
