declare module 'react-native-asymmetric-image-grid' {
    import { FC } from 'react';
    export type AsymmetricImageGridProps = {
        images: string[];
    };
    const AsymmetricImageGrid: FC<AsymmetricImageGridProps>;
    export default AsymmetricImageGrid;
}
