# vivasoft-component-library

A react and tailwind component library.

## Installation

Use the package manager npm to install the package.

```bash
npm install vivasoft-component-library
or
yarn add vivasoft-component-library
```

This component library internally uses TailwindCSS to compose it's design. So TailwindCSS need to be installed as dependency.

```bash
npm install -D tailwindcss postcss autoprefixer
or
yarn add --dev vivasoft-component-library
```

after that initialise Tailwind in the project.

```bash
npx tailwindcss init -p
```

Allow Tailwind compiler to apply css on the library code.

```bash
module.exports = {
  content: [
    ...
    './node_modules/vivasoft-component-library/**/*.{js,ts,jsx,tsx,mdx,cjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Set up the Tailwind directives inside the global css file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## Usage

```javascript
import { Table, Button } from 'vivasoft-component-library'

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "12 Downing Street",
  },
  {
    key: "3",
    name: "Sherlock",
    age: 52,
    address: "225 Baker St",
  },
  {
    key: "4",
    name: "John Watson",
    age: 53,
    address: "225 Baker St",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sortable: true // add property sortable with boolean value true to add sorting to a column. If this property doesn't exist in a column of set to false then the column will not have any sorting.
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (text, row) => {
      return <span>{`${text} ${row.name}`}</span>;
    },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (val, row) => (
      <div>
        <button
          className="text-yellow-500"
          onClick={() => console.log("add edit logic for row ", row.key)}
        >
          Edit
        </button>
        /
        <button
          className="text-red-500"
          onClick={() => console.log("add delete logic for row ", row.key)}
        >
          Delete
        </button>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      bordered={true}
      fontFamily="font-inter"
      className="tableRootClass"
      borderProps={{
        border: "border-collapse",
        width: "border-b-[1px]",
        color: "border-[#dbdef0]",
      }}
      rowClassName={(row) => {
        if (row.key % 2 === 0) {
          return "even-row";
        }
        return "odd-row";
      }}
    />
  );
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)