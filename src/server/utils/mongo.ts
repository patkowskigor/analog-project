// server/utils/mongo.ts
import mongoose from 'mongoose';

const mongoUri = 'mongodb+srv://admin:admin@cluster0.gqphz.mongodb.net/Cluster0?retryWrites=true&w=majority';

if (!mongoose.connection.readyState) {
    mongoose.connect(mongoUri)
        .then(() => {
            console.log('Połączono z MongoDB');
        })
        .catch(err => {
            console.error('Błąd połączenia z MongoDB', err);
        });
}

export default mongoose;
