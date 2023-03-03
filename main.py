import uvicorn
import socketio

from leds import Leds

leds = Leds()

static_files = {
    '/': './app/dist/index.html',
    '/assets': './app/dist/assets'
}

sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
app = socketio.ASGIApp(sio, static_files=static_files)



@sio.event
async def connect(sid, environ):
    print(f'✅ {sid} connected!')


@sio.event
def disconnect(sid):
    print(f'❌ {sid} disconnected!')


@sio.on('getColor')
async def getColor(sid):
    color = [leds.current_color]
    print('get color', color)
    return color


@sio.on('setColor')
async def setColor(sid, data):
    if None in data:
        print(f'\nwrong color ({data})')
    else:
        print(f'\rset color: {data}', end=' ', flush=True)
        leds.setColor(tuple(data))

if __name__ == "__main__":
    uvicorn.run("main:app", port=80, host="0.0.0.0")
