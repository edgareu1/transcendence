FROM python:3.9-alpine3.19

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

COPY . /

WORKDIR /

EXPOSE 8000

RUN python3 -m venv /py && \
	/py/bin/pip install --upgrade pip && \
	/py/bin/pip install -r /requirements.txt && \
	adduser --disabled-password --no-create-home app

ENV PATH="/py/bin:$PATH"

USER app

# Run migrate and then start the Django app
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
