FROM quay.io/quarkus/ubi-quarkus-native-image:22.3-java11 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN ./mvnw package -Pnative -Dquarkus.native.container-build=true

FROM registry.access.redhat.com/ubi8/ubi-minimal
WORKDIR /work/
COPY --from=build /app/target/*-runner /work/application
CMD ["./application"]