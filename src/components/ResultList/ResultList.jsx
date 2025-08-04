/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { 
  ResultContainer,
  ResultHeaderRow, 
  ResultHeader, 
  ResultHeaderContainer,
  ResultRowContainer,
  LoadMore,
  TotalRow,
  GroupBy } from './ResultList.styles';
import Checkbox from '../Checkbox/Checkbox';
import Loading from '../Loading/Loading';
import Button from '../Button/Button';
import EmptySearchResult from '../EmptySearchResult/EmptySearchResult';

export default function ResultList({ 
  result, 
  resultHeader, 
  loading, 
  hasNextPage, 
  onLoadMore,
  ResultRow,
  totalCountText, 
  groupBy, 
}) {
  const [checkedIds, setCheckedIds] = useState([]);
  const allIds = result.map(item => item.node.id);
  const isAllChecked = allIds.length > 0 && checkedIds.length === allIds.length;
  const groupedResults = useMemo(() => {
    if (!groupBy) return null;
    return result.reduce((groups, item) => {
      const groupKey = groupBy(item);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {});
  }, [result, groupBy]);

  const handleCheckboxChange = (id, checked) => {
    setCheckedIds(prev =>
      checked ? [...prev, id] : prev.filter(rowId => rowId !== id)
    );
  };

  const handleAllCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckedIds(allIds);
    } else {
      setCheckedIds([]);
    }
  };

  const handleEllipsisButtonClick = () => {
    console.log("Ellipsis button clicked");
  }

  return (
    <>
      {loading && <Loading />}
      {result.length === 0 && !loading && <EmptySearchResult />}
      {!loading && result.length !== 0 && (
        <>
          <ResultContainer>
            <ResultHeaderRow>
              <ResultHeader width={"120px"}>
                <Checkbox 
                  name="all" 
                  label="All" 
                  checked={isAllChecked}
                  onChange={handleAllCheckboxChange}
                />
              </ResultHeader>
              <ResultHeaderContainer>
                {resultHeader.map((header, index) => (
                  <ResultHeader 
                    key={index}
                    width={header.width ? header.width : "auto"}
                  >
                    { header.name }
                  </ResultHeader>
                ))}
              </ResultHeaderContainer>
            </ResultHeaderRow>
            <ResultRowContainer>
              {totalCountText && <TotalRow>{totalCountText}</TotalRow>}
              {(groupBy && groupedResults)
                ? (
                  Object.entries(groupedResults).map(([groupByKey, items]) => (
                    <React.Fragment key={groupByKey}>
                      <GroupBy>{groupByKey}</GroupBy>
                      {items.map((item) => (
                        <ResultRow 
                          key={item.node.id}
                          ids={checkedIds}
                          item={item}
                          resultHeader={resultHeader}
                          handleCheckboxChange={handleCheckboxChange}
                          handleEllipsisButtonClick={handleEllipsisButtonClick}
                        />
                      ))}
                    </React.Fragment>
                  ))
                )
                : (
                  result.map((item) => (
                    <ResultRow 
                      key={item.node.id}
                      ids={checkedIds}
                      item={item}
                      resultHeader={resultHeader}
                      handleCheckboxChange={handleCheckboxChange}
                      handleEllipsisButtonClick={handleEllipsisButtonClick}
                    />
                  ))
                )}
            </ResultRowContainer>
          </ResultContainer>
          {hasNextPage && (
            <LoadMore>
              <Button size="medium" color="secondary" variant="outlined" onClick={onLoadMore}>Load more</Button>
            </LoadMore>
          )}
        </>
      )}
    </>
  );
}
