from api_example.utils.user import verif
from api_example.lib import cnbc

@verif.verif
def cnbeceh(request):
    return cnbc(request)
