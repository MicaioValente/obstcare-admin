// Modules
import { ObstetrasScreen } from 'modules/home/screens/obstetras';

// Components
import { Layout } from 'components/layout';

const ObstetrasPage = () => {
    return (
        <Layout selectedKey="2">
            <ObstetrasScreen />
        </Layout>
    );
};

export default ObstetrasPage;
