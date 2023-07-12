import React, { useState } from 'react';
import YourExcelComponent from './ExcelComponent';
import ColumnExcelComponent from './MetabaseInput3';

function CustomExcelTable() {
    const [columnNames, setColumnNames] = useState([]); // 컬럼명을 저장하는 상태

    return (
        <div>
            <YourExcelComponent setColumnNames={setColumnNames} />
            <ColumnExcelComponent columnNames={columnNames} />
        </div>
    );
}

export default CustomExcelTable;
