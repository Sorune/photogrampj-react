import React, { Component } from "react";
import { ImageCellItem } from "./ImageCell.tsx";

// 2차원 배열에 순차적으로 이미지를 푸시하는 함수
const distributeToColumns = (array: any[], columns: number) => {
    const result = Array.from({ length: columns }, () => []); // 빈 2차원 배열 생성
    array.forEach((item, index) => {
        result[index % columns].push(item); // 순차적으로 각 컬럼에 아이템 배치
    });
    return result;
};

export class MasonryGridGallery extends Component<
    { imageCellSectionData: any[]; activeFilter: string },
    { columns: number; gridData: any[][] }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            columns: 2, // 기본적으로 작은 화면에서는 2개 컬럼
            gridData: [[]],
        };
    }

    // 화면 크기에 따라 그리드의 컬럼 개수를 동적으로 조정
    updateColumns = () => {
        if (window.innerWidth >= 768) {
            this.setState({ columns: 3 });
        } else {
            this.setState({ columns: 2 });
        }
    };

    // 컴포넌트가 처음 마운트될 때 및 리사이즈 이벤트 추가
    componentDidMount() {
        this.updateColumns();
        window.addEventListener("resize", this.updateColumns);
        this.updateGridData(); // 처음 마운트 시 그리드 데이터 설정
    }

    // 컴포넌트가 언마운트될 때 리사이즈 이벤트 제거
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateColumns);
    }

    // 컴포넌트가 업데이트될 때 (필터 또는 컬럼 수 변경 시)
    componentDidUpdate(prevProps: any, prevState: any) {
        if (
            prevProps.activeFilter !== this.props.activeFilter ||
            prevProps.imageCellSectionData !== this.props.imageCellSectionData ||
            prevState.columns !== this.state.columns
        ) {
            this.updateGridData();
        }
    }

    // 필터링된 이미지를 2차원 배열로 배치
    updateGridData = () => {
        const { imageCellSectionData, activeFilter } = this.props;

        // 필터링된 이미지를 계산
        const filteredImages = imageCellSectionData.filter(
            (card: {
                imagePath: string;
                title: string;
                category: string;
                link: string;
            }) =>
                activeFilter === "All" ||
                card.category.toLowerCase() === activeFilter.toLowerCase()
        );

        // 컬럼 수에 맞게 이미지 배열 재구성
        const updatedGridData = distributeToColumns(
            filteredImages,
            this.state.columns
        );

        this.setState({ gridData: updatedGridData });
    };

    render() {
        const { gridData } = this.state;

        return (
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-4`}>
                {gridData.map((column, index) => (
                    <div key={index} className="grid gap-4 auto-rows-min h-auto">
                        {column.map(
                            (
                                card: {
                                    imagePath: string;
                                    title: string;
                                    category: string;
                                    link: string;
                                },
                                idx
                            ) => (
                                <ImageCellItem key={`${this.props.activeFilter}-${idx}`} {...card} />
                            )
                        )}
                    </div>
                ))}
            </div>
        );
    }
}
