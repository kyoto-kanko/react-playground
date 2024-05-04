import { memo } from 'react';

const sytle = {
    width: '100%',
    height: '200px',
    backgroundColor: 'khaki',
};

export const ChildArea = memo(props => {
    const { open, onClickClose } = props;
    return (
        <>
            {open ? (
                <div style={sytle}>
                    <p>子コンポーネント</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
            ) : null}
        </>
    );
});
